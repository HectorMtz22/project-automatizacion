type Prompt = {
  response: string;
  prompt: string;
  promptToDisplay: string;
  createTime: Timestamp;
  status: {
    completeTime: Timestamp;
    startTime: Timestamp;
    state: string;
    updateTime: Timestamp;
  };
};

type Timestamp = {
  seconds: number;
  nanoseconds: number;
};

type UseSessionId = {
  id: `${string}-${string}-${string}-${string}-${string}` | null;
  setSessionId: () => void;
};
