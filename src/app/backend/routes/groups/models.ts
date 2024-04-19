import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export type GroupDataType = {
  groupName: String;
  createdBy: string;
  createdById: String;
  groupMembers: [];
};

export const CreateGroup = {
  createUser: async (groupData: GroupDataType) => {
    try {
      const newGroup = await prisma.userProfile.create({
        data: {
         
        },
      });
      return newGroup;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  },
};
