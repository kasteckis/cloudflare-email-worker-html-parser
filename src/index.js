import * as PostalMime from 'postal-mime';

export default {
    async email(message, env, ctx) {
        const parser = new PostalMime.default();
        const rawEmail = new Response(message.raw);
        const email = await parser.parse(await rawEmail.arrayBuffer());

        // console.log("message.from: ", message.from);
        // console.log("message.to: ", message.to); // If you are receiver of email or receiver via BCC, this is source of truth
        //
        // console.log("Subject: ", email.subject);
        // console.log("From name: ", email.from.name);
        // console.log("From address: ", email.from.address);
        // console.log("Bcc: ", email.bcc); // This is array, but you only see 1 email (email.bcc[0].address)
        // console.log("To: ", email.to); // This is array (email.to[0].address)
        // console.log("HTML: ", email.html);
        // console.log(email);


        const response = await fetch("https://YOUR-OWN-DOMAIN.com/api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "change-this-to-your-secret-token",
            },
            body: JSON.stringify({
                real_from: message.from,
                real_to: message.to,

                subject: email.subject,
                from_name: email.from.name,
                from_address: email.from.address,
                bcc_multiple: email.bcc,
                to_multiple: email.to,
                html: email.html,

                metadata: email,
            }),
        });

        // await message.forward("youremail@gmail.com");
    },
};
