eval $(gpg --decrypt ./scripts/secrets/hidden/publish-env.sh)

if [[ -z $DOCS_BUCKET_URI ]] || [[ -z $DOCS_DISTRIBUTION_ID ]]; then
  echo "Required environment variables DOCS_BUCKET_URI and/or DOCS_DISTRIBUTION_ID are not defined"
  exit 1
fi

yarn install \
&& yarn run clean.public \
&& NODE_ENV=production yarn build \
&& aws s3 cp ./public/docs $DOCS_BUCKET_URI --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers \
&& aws cloudfront create-invalidation --distribution-id $DOCS_DISTRIBUTION_ID --paths '/*'
