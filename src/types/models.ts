export type ModelDelegate = {
  findUnique: (args: { where: { id: string } }) => Promise<any | null>;
};
