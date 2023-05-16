export default function getEnvVariable(envVariableName: string) {
  const envVariable = process.env[envVariableName];
  if (!envVariable)
    throw new Error(`Env variable ${envVariableName} not found.`);
  return envVariable;
}
