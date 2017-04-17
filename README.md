# node-js-guest-executable-service-fabric
Example Node.js guest executable that will run on Microsoft service fabric cluster.


To create a service fabric configurationos for existing node app follow the [official microsoft tutorial](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-deploy-multiple-apps).

Example :

1. Download app packaging utils executable from [this location](https://servicefabricsdkstorage.blob.core.windows.net/publicrelease/Pre-Release-SFPackagingTool.zip)
2. Copy Node.exe file from "Program Files\Node" folder to you project folder.
3. Run below command (with your project name and target locations) to create service fabric configurations.

```
ServiceFabricAppPackageUtil.exe /source:node_env_poc /target:'node-sf-deploy' /appname:NodeEnvService /exe:node.exe /AppType:NodeAppType 
```
4. After the package generated run below commands to upload and run it on service fabric cluster
```
Copy-ServiceFabricApplicationPackage -ApplicationPackagePath 'node-sf-deploy' -ImageStoreConnectionString 'file:C:\SfDevCluster\Data\ImageStoreShare' -A
pplicationPackagePathInImageStore 'NodeAppType'

Register-ServiceFabricApplicationType -ApplicationPathInImageStore 'NodeAppType'

New-ServiceFabricApplication -ApplicationName 'fabric:/NodeApp' -ApplicationTypeName 'NodeAppType' -ApplicationTypeVersion 1.0
```
