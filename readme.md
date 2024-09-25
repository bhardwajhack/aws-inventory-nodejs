# setup

- clone git repo aws-sdk-js-v3
    - will help in genrating list of all service along with their client import statement

```

git clone https://github.com/aws/aws-sdk-js-v3.git
```

### Install docker and run below command to create image
```
docker build -t node20 .
```

### Run below command to run script with node, along with debuging
```

here --inspect-brk --inspect=0.0.0.0:9229 /app/scripts/genrage-services-map.js
```