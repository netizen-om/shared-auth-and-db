import NextAuth from "next-auth";
// Import from your shared auth package!
import { authOptions } from "@my-project/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };