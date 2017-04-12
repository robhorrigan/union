eval $(gpg --decrypt ./scripts/secrets/hidden/publish-env.sh)

if [[ -z $ASSETS_BUCKET_URI ]] || [[ -z $ASSETS_DISTRIBUTION_ID ]]; then
  echo "Required environment variables ASSETS_BUCKET_URI and/or ASSETS_DISTRIBUTION_ID are not defined"
  exit 1
fi

npm install \
&& npm run build.patterns \
&& aws s3 cp ./public/assets $ASSETS_BUCKET_URI --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers \
&& aws cloudfront create-invalidation --distribution-id $ASSETS_DISTRIBUTION_ID --paths /public/assets
