export type Effect = {
  tags: any[];
  value: number;
  duration: number;
  animationTags: any[];
};

const mockEffect = {
  tags: ["damage", "fire"],
  duration: 1,
  value: 5,
  animationTags: ["fire", "explosion"],
};
