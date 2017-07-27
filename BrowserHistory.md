# Browser History

### What is the difference between hash and browser history?

##### hashHistory
example.com/# **/user**
> Only looks to the right of the has

##### browserHistory
example.com **/user**
> Only looks to the right of the TLD

### Problems with browserHistory
By default, if the user navigates to the site subindex (example.com/user) the server is the one trying to find a site that doesn't exist. 
Because, when the subindex is updated, the page isn't reloaded.

#### Solution
Send the request always to the main html, either by flask, nginx, express, or whatever web service you use.