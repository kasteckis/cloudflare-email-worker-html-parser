import * as PostalMime from 'postal-mime';

export default {
    async email(message, env, ctx) {
        const parser = new PostalMime.default();
        const rawEmail = new Response(message.raw);
        const email = await parser.parse(await rawEmail.arrayBuffer());

        console.log("message.from: ", message.from);
        console.log("message.to: ", message.to);

        console.log("Subject: ", email.subject);
        console.log("From name: ", email.from.name);
        console.log("From address: ", email.from.address);
        console.log("To: ", email.to); // This is array (email.to[0].address)
        console.log("HTML: ", email.html);
        console.log(email);

        // await message.forward("youremail@gmail.com");
    },
};
