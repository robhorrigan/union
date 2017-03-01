s3_uri=s3://xo-union-docs

npm install \
&& NODE_ENV=production npm run build \
&& aws s3 cp ./public/docs $s3_uri --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
