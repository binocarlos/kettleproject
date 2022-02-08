import {Configuration, Inject} from "@tsed/di"
import {PlatformApplication} from "@tsed/common"
import * as bodyParser from "body-parser"
import * as compress from "compression"
import * as cookieParser from "cookie-parser"
import * as methodOverride from "method-override"

const rootDir = __dirname

@Configuration({
  rootDir,
  acceptMimes: ["application/json"],
  mount: {
    "/api/v1": [
      `${rootDir}/controllers/**/*.ts`,
    ],
  }
})
export class Server {
  @Inject()
  app: PlatformApplication

  @Configuration()
  settings: Configuration

  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void | Promise<any> {
    this.app
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json({ type: 'application/*+json' }))
      .use(bodyParser.raw({ 
        verify: (req, res, buf) => {
          if (req.headers['stripe-signature'] || req.headers['x-raw-upload']) {
            req['rawBody'] = buf
          }
        }  
      }))
      .use(bodyParser.text({ type: 'text/html' }))
      .use(bodyParser.urlencoded({
        extended: true
      }))
  }
}