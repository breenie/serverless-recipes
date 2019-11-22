## SNS Fanout

Instead of notifying Lambda a new file has arrived, publish events to SNS and subscribe to these events as required.

This demo creates two lambdas and subscribes these to the SNS topic. Adding a file to the S3 bucket created in the script will fire events and write to cloudwatch. That is all.
