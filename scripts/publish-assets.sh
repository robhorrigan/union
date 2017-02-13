s3_uri=s3://xo-union

npm install \
&& npm run build.patterns \
&& aws s3 cp ./public/assets $s3_uri --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
