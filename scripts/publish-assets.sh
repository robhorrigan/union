eval $(gpg --decrypt ./scripts/secrets/hidden/publish-env.sh)

if [[ -z $ASSETS_BUCKET_URI ]]; then
  echo "Required environment variables ASSETS_BUCKET_URI is not defined"
  exit 1
fi

yarn install \
&& yarn run clean.public \
&& yarn run build.patterns \
&& aws s3 cp ./public/assets $ASSETS_BUCKET_URI --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers

