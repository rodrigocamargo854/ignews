import console from 'console';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'
//get using fauna to save all users logged on application

export default  NextAuth ({

    //scope is all necessary information
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn(user,account,profile){

            return true
        },
    }
})