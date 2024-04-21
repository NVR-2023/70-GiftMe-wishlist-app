import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export type CreateGroupProps = {
  groupName: String;
  createdById: String;
  isActive: boolean;
  groupMembers?: [];
};

export const CreateGroup = {
  createUser: async (groupData: CreateGroupProps) => {
    try {
      const newGroup = await prisma.group.create({
        data: {
          groupName: groupData.groupName,
          createdById: groupData.createdById,
          isActive: groupData.isActive,
          groupMembers: groupData.groupMembers,
        },
      });
      return newGroup;
    } catch (error) {
      throw new Error("Failed to create Group");
    }
  },
};
