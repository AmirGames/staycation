import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { signToken } from "../utils/jwt";

const prisma = new PrismaClient();

export const AuthService = {
  async register({ email, password }: any) {
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return { status: 400, data: { error: "User already exists" } };
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashed },
    });

    return { status: 201, data: { user } };
  },

  async login({ email, password }: any) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { status: 400, data: { error: "Invalid credentials" } };
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return { status: 400, data: { error: "Invalid credentials" } };
    }

    const token = signToken({ userId: user.id });

    return { status: 200, data: { token, user } };
  },
};
