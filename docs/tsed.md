## tsed

Notes on using the [tsed](https://github.com/tsedio/tsed) framework for the api

#### body-parser

Some routes cannot have their body parsed - e.g. Stripe webhooks or file uploads.

We need a way to tell tsed to use JSON body parser selectively

https://github.com/tsedio/tsed/issues/625

```typescript
public $beforeRoutesInit(): void | Promise<any> {
  this.app
    .use(cookieParser())
    .use(compress({}))
    .use(methodOverride())
    .use(bodyParser.text({ type: 'text/html' }))
    .use(bodyParser.urlencoded({
      extended: true
    }))
    .use(bodyParser.json({ type: 'application/*+json' }))
    .use(bodyParser.raw({ 
      verify: (req, res, buf) => {
        if (req.headers['stripe-signature'] || req.headers['x-raw-upload']) {
          req['rawBody'] = buf
        }
      }  
    }))
    
}
```

Meaning that if we send a request with `stripe-signature` or `x-raw-upload` header, we can:

```typescript
@Post("/")
post(@Req("rawBody") rawBody: Buffer, @BodyParams() body: any, @BodyParams({useConverter: false}) rawBody2: any){
   console.log("rawBody", rawBody) // Buffer if headers["Content-Type"] = "application/vnd.custom-type"
   console.log("body", body) // Buffer also if headers["Content-Type"] = "application/vnd.custom-type" but wrong decoding
   console.log("rawBody2", rawBody2) // Buffer if headers["Content-Type"] = "application/vnd.custom-type"
}
```