---
title: The Commit Message Standard

tags:
  - git
---
Since we have git flow as a nice standard it makes sense to standardise our commit messages as well.

Here’s the following proposed standard:

>[Updated | Added | Removed (required)] [Component (required)] [Reason] - [Issue Reference (required)]

Action - Updated/Added/Removed - Three options to concisely describe what this commit achieves. If your commit message doesn’t fit any of the words then you might want to reconsider splitting the commit up into smaller chunks (git add -p). Other verbs can be used here but sticking to these 3 as a standard makes you think a bit more carefully about the context of the commit message.

Component - The area/module/class/method you’ve edited. Note that this isn’t filename it’s a reference to the general area so if people are searching for commits related to the area they can find it easier.

Reason - A general reason for the update, at a minimum it should include a one line summary of the issue your references.

Issue Reference - A mandatory reference to the ticket ID.

I’m looking for feedback on this so please post a comment below!

Additional Resources:

[@miss_jwo](http://twitter.com/miss_jwo) pointed me to https://gist.github.com/rmccue/daf72eaffe984f988a0a - Some good starting points but I think it misses a lot of vital points.
