1. git init

2. git add -A / git add . /

3. git commit -m "message"
   git push origin master

1. git push -u origin master

2. git rm --cached <filePath> // stages removal of the file from repo leaving file in working tree
   git reset -- <filePath> // unstage any staged changes for a given file.
 
3. git reset --hard <address of previous commit>

4. -- helps you add qualifiers( in our case - hard). Only using 'git reset' helps you 
   unstage changes that were made before without the loss of any of your code. 
   However, git reset --hard takes your code to a previous state with the removal of any
   previous states that occured after that particular state.

5. If you make changes to your codebase that were probably wrong and want to go back
   to a previous state of the codebase when it was right, you would want to reset 
   to a previous commit


1. git branch newbranch

2. git checkout foo

3. 'master' branch is usually used for finished features. If you are , however, working
   on a feature and it isn't completed , but you still want to save those changes,
   you can use branches to keep your changes off the 'master' branch.   


1. 'git merge' would be useful would be useful when you are making a change to a 
   repo that is owned by you and you are the only one contributing to it and hence
   you don't need to review it before it is merged.
   Submitting a pull request is better when you are adding code to a codebase that
   is being contributed to by several other people and want to review changes before
   it is merged.

2. git push -u origin master

