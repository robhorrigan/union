s3_uri=s3://xo-union-docs

npm install \
&& npm run build \
&& aws s3 cp ./docs $s3_uri --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
