import NextAuth from "next-auth"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"
import Okta from "next-auth/providers/okta"

export const { auth, handlers } = NextAuth({
  providers: [Okta, MicrosoftEntraID],
})