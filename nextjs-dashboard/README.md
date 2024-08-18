## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

** NextAuth.js 설치 **
출처 :  https://nextjs.org/learn/dashboard-app/adding-authentication
1. 설치
pnpm i next-auth@beta
2. 쿠키 암호화에 사용될 시크릿키 생성
openssl rand -base64 32
출력예> zS7yCSjQlarO54kl0QKrCapW7C5PnkIyxnrn+A7eGi4=
3. 생성된 시크릿키를 .env 파일 AUTH_SECRET 에 추가
예> AUTH_SECRET=zS7yCSjQlarO54kl0QKrCapW7C5PnkIyxnrn+A7eGi4=