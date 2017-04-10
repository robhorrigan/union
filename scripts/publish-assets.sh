eval $(gpg --decrypt ./scripts/secrets/hidden/deploy-env.sh)

npm install \
&& npm run build.patterns \
&& aws s3 cp ./public/assets $S3_ASSETS_BUCKET_URI --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers \
&& aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ASSETS_DISTRIBUTION_ID --paths /public/assets
