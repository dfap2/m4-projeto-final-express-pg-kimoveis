import { User } from "../entities";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
    const user: User = userRepository.create(payload);
    await userRepository.save(user);

    return userReturnSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
    const users: UserRead = await userRepository.find();

    return userReadSchema.parse(users);
};

const update = async (
    payload: UserUpdate,
    foundUser: User
): Promise<UserReturn> => {
    const user: User = await userRepository.save({ ...foundUser, ...payload });

    return userReturnSchema.parse(user);
};

const destroy = async (user: User): Promise<void> => {
    await userRepository.softRemove(user);
};

export default { create, read, update, destroy };
