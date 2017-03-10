s3_uri=s3://docs.union.theknot.com

npm install \
&& NODE_ENV=production npm run build \
&& aws s3 cp ./public/docs $s3_uri --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
