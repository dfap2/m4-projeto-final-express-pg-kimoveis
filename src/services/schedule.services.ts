import { RealEstate, Schedule, User } from "../entities";
import { AppError } from "../errors";
import { ScheduleCreate, ScheduleReturn } from "../interfaces";
import {
    realEstateRepository,
    scheduleRepository,
    userRepository,
} from "../repositories";
import { scheduleReturnSchema } from "../schemas";

const create = async (
    payload: ScheduleCreate,
    userId: number
): Promise<ScheduleReturn> => {
    const { date, hour } = payload;
    const { realEstateId } = payload;

    const sameDate: Schedule | null = await scheduleRepository
        .createQueryBuilder("s")
        .innerJoin("s.user", "u")
        .where("u.id = :userId", { userId })
        .andWhere("s.date = :date", { date })
        .getOne();

    console.log(sameDate);

    if (sameDate)
        throw new AppError(
            "User schedule to this real estate at this date and time already exists",
            409
        );

    const existingSchedule: Schedule | null = await scheduleRepository
        .createQueryBuilder("s")
        .where("s.date = :date", { date })
        .andWhere("s.hour = :hour", { hour })
        .innerJoin("s.realEstate", "r")
        .andWhere("r.id = :realEstateId", { realEstateId })
        .getOne();

    if (existingSchedule)
        throw new AppError(
            "Schedule to this real estate at this date and time already exists",
            409
        );

    const convertedHour = Number(hour.toString().replace(":", "."));

    if (!(convertedHour >= 8 && convertedHour <= 18))
        throw new AppError("Invalid hour, available times are 8AM to 18PM");

    const newDate = new Date(date);
    const weekDay = newDate.getDay();

    console.log(weekDay);

    if (!(weekDay >= 1 && weekDay <= 5))
        throw new AppError("Invalid date, work days are monday to friday");

    const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
        id: realEstateId,
    });

    if (!realEstate) throw new AppError("RealEstate not found", 404);

    const user: User | null = await userRepository.findOneBy({
        id: userId,
    });

    if (!user) throw new AppError("User id notfound", 404);

    const schedule: Schedule = scheduleRepository.create({
        ...payload,
        realEstate,
        user,
    });

    await scheduleRepository.save(schedule);

    return scheduleReturnSchema.parse(schedule);
};

const retrieve = () => {
    return;
};

export default { create, retrieve };
