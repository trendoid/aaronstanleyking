---
title: "Use Free Certificates. Always Use a Certificate."
excerpt: "Azure added free DigiCert SSL certs! No wildcard certs but they are free and managed. AWS had free certs already if you use AWS Certificate Manager."
date: "2021-07-01"
author: "Aaron Stanley King"
tags: ["ssl", "certificates", "azure", "aws", "security", "https"]
featured: false
---

# Use Free Certificates. Always Use a Certificate.

Azure added free DigiCert SSL certs! Check it out on [Microsoft Docs](https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-certificate#create-a-free-certificate-preview). No wildcard certs but they are free and managed, so since subdomains are free, who cares if its not a wildcard.

So you don't need to do the CertBot stuff anymore if you're on Azure. Using a cert bot is good too. If your cloud doesn't have free certs use [Let's Encrypt](https://letsencrypt.org/).

By the way, AWS had free certs already if you use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/).

## The Bottom Line

- **Don't pay for certs** - Use free certificates from your cloud provider
- **Always get a cert** - There's no excuse not to use HTTPS in 2021 and beyond
- **Use free certs** - Whether it's Azure, AWS, or Let's Encrypt

# Use Free Certificates. Always Use a Certificate.

![HTTPS security and SSL certificates](https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)

Using HTTPS should be the default for all web applications today. Let's Encrypt and other free certificate authorities have made it easier than ever to secure your sites.

Security should never be optional, and with these free certificate options, it doesn't have to be expensive either.