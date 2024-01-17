---
title: "Terraforming AWS"
date: 2024-01-16T20:00:00Z
draft: false
---

TLDR; template code can be found [here](https://github.com/mikebell-dev/tf-template).

I've had my personal AWS setup for 10 years now and it's time that it got organised. I've made previous attempts at this using Terraformer but it's output wasn't structure enough for my liking.

This time round I've decided to split it up into two components:

* Base
* Applications

## Terraform style guide

I have a few rules that my TF repos need to follow:

1. Must have a `readme.md`
2. Terraform files must be stored in a `terraform` directory (application code can live outside)
3. `main.tf` must be lean and not contain any resources
4. Terraform files must be named after the AWS resource
5. Must pin terraform version
6. Must include github workflows for gitops

## Base Terraform

This contains all the base terraform code that doesn't belong in an application, things like s3/dyanmodb for terraform (applications use this) and IAM roles for Github OIDC.

```
-> % tree -a
.
├── .github
│   └── workflows
│       ├── pr-apply.yml
│       └── pr-plan.yml
├── .gitignore
├── readme.md
└── terraform
    ├── dynamodb.tf
    ├── iam.tf
    ├── main.tf
    ├── s3.tf
    ├── .terraform.lock.hcl
    └── .terraform-version
```

# Application Terraform

Applications are usually a group of resources that do a related set of *things*. In my case it's domains which I use to group these resources into an "application"

```
-> % tree -a
.
├── .github
│   └── workflows
│       ├── pr-apply.yml
│       └── pr-plan.yml
├── .gitignore
├── readme.md
└── terraform
    ├── acm.tf
    ├── cloudfront.tf
    ├── main.tf
    ├── providers.tf
    ├── route53.tf
    ├── s3.tf
    ├── .terraform.lock.hcl
    └── .terraform-version
```

## Github Actions

Each application repo has two Github Actions repos by default, the first runs `terraform plan` when a pull request is raised. The second is a `terraform apply` when a PR is merged into `main`. General rule of thumb is to never run terraform locally and every change has to be done through a PR. Depending on the size and urgency of the change sometimes it's just easier to run it locally, majority of the time it's through PRs.

## Readme.md

@TODO I want to automate this, some sort of tool that runs through each tf file and outputs each resource into a table. This sounds like a great time to learn Go.

## .terraform-version

This is used by `tfenv` making sure that I'm always running the same version regardless of the environment. I want to look into this further and potentially remove it. ASDF looks interesting for sure.

# Conclusion

That's about it for my own personal setup, I've borrowed a lot from various setups I've work on over the past couple of years so can't take all the credit for it. Overall I've migrated around 30% of my applications to this setup, more to come. A basic template of this can be found [here](https://github.com/mikebell-dev/tf-template).
