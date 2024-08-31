import mongoose from 'mongoose';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export async function register() {
  //check connection  to db
  await mongoose.connect(
    process.env.MONGODB_URI || serverRuntimeConfig.connectionString,
  );
}
