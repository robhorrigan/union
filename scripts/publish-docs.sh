eval $(gpg --decrypt ./scripts/secrets/hidden/publish-env.sh)

npm install \
&& NODE_ENV=production npm run build \
&& aws s3 cp ./public/docs $DOCS_BUCKET_URI --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
&& aws cloudfront create-invalidation --distribution-id $DOCS_DISTRIBUTION_ID --paths /public/assets
