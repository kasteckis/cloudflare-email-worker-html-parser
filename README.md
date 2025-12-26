# Cloudflare Email Worker HTML Parser

# Setup
1. Add domain to CloudFlare and verify it
2. Install Wrangler CLI: `npm install -g wrangler` Or check out [Docs](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
3. Create API token here: https://dash.cloudflare.com/profile/api-tokens
   - Create Token -> Edit Cloudflare Workers -> Use template
   - Copy generated API token
   - Write `$ export CLOUDFLARE_API_TOKEN=your_token_here` in your terminal
4. Write `$ npm install` to install dependencies for parsing HTML email content
5. Adjust receiver email in - `./src/index.js` file
6. Write `$ wrangler deploy` to deploy the worker
7. New worker was successfully created and deployed with a name: `forwarder-worker`

# Logs

If you need to see more detailed logs for debugging, you can enable verbose logging by adding these to `wrangler.toml`


```
... OLD CONTENT ...

[observability]
enabled = false
head_sampling_rate = 1

[observability.logs]
enabled = true
head_sampling_rate = 1
persist = true
invocation_logs = true

[observability.traces]
enabled = false
persist = true
head_sampling_rate = 1
```