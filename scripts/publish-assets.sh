s3_uri=s3://xo-union
distribution_id=$1
if [ -z "$distribution_id" ]; then
    echo "Please provide a Cloudfront distribution ID as the first parameter"
    exit 1
fi
npm install \
&& npm run build.patterns \
&& aws s3 cp ./public/assets $s3_uri --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers \
&& aws cloudfront create-invalidation --distribution-id $distribution_id --paths /public/assets
