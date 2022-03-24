---
sidebar_position: 4
---

# find Command

You can use the ‘find’ command to search for an existing SBOM, statement, or attestation either in the Scribe CLI default cache or in a path you specify.
The simplest way to use this command is:   
```scribe find alpine:latest```  - this command will look for the default SBOM (cyclonedx json) in the Scribe cache (by default /tmp/scribe unless you changed it using the -d global flag). Note that the find command doesn’t externalize any information so if you want to verify what the find result was it’s currently recommended to use the flag -v or -vv.

Just like the bom command, the find command can be used on a docker image from your own repo, a tarball from the disk or the OCI archives etc’.  

Here are some more examples:  
```scribe find yourrepo/yourimage:tag -vv``` - defaults to using images from a Docker daemon. If Docker is not present, the image is pulled directly from the registry.

You can also explicitly specify the scheme to use:   
```scribe find docker:yourrepo/yourimage:tag -vv``` - explicitly use the Docker daemon   
```scribe find docker-archive:path/to/yourimage.tar -vv``` - use a tarball from disk for archives created from "docker save"   
```scribe find oci-archive:path/to/yourimage.tar -vv``` - use a tarball from disk for OCI archives (from Skopeo or otherwise)   
```scribe find dir:path/to/yourproject -vv``` - read directly from a path on disk (any directory)    
```scribe find registry:yourrepo/yourimage:tag -vv``` - pull image directly from a registry (no container runtime required)    
```scribe find file:path/to/yourproject/file -vv``` - read directly from a path on disk (any single file)  

Here are some flags relevant to the ‘find’ command.

<table>
  <tr>
    <th>Short</th>
    <th width='18%'>Full Flag</th>
    <th>Format</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-a</td>
    <td>--all</td>
    <td></td>
    <td>Find all output types, SBOMs, statements, and attestations.</td>
  </tr>
  <tr>
    <td>-o</td>
    <td>--format</td>
    <td>string</td>
    <td>The format searched for. The options are cyclonedx-json, cyclonedx-xml, attest-cyclonedx-json, and statement-cyclonedx-json. The default is "cyclonedx-json".</td>
  </tr>
  <tr>
    <td>-h</td>
    <td>--help</td>
    <td></td>
    <td>Presents all the help information for the ‘find’ command.</td>
  </tr>
</table>
