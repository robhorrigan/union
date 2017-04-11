eval $(gpg --decrypt ./scripts/secrets/hidden/publish-env.sh)

npm install \
&& npm run build.patterns \
&& aws s3 cp ./public/assets $ASSETS_BUCKET_URI --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers \
&& aws cloudfront create-invalidation --distribution-id $ASSETS_DISTRIBUTION_ID --paths /public/assets
