
import { Handler, ScheduledEvent, Context } from 'aws-lambda';
import { SNSClient, PublishCommand, PublishCommandInput } from '@aws-sdk/client-sns'

const client = new SNSClient({ region: "us-east-1" });

export const run: Handler = async (event: ScheduledEvent, context: Context) => {

  const params: PublishCommandInput = {
    Message: `hey there". ${event.source}`,
    TopicArn: process.env.TOPIC_ARN
    /** input parameters */
  };
  const command = new PublishCommand(params);
  await client.send(command);

  return context.logStreamName;
};