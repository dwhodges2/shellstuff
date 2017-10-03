# User specific aliases and functions

export PATH="/usr/local/mysql/bin:$PATH"
export PATH=$PATH:~/bin

source ~/git-completion.bash

unalias -a

alias   man='man -P less'
alias   cp='cp -ip'
#alias   mv='mv -i'
#alias   rm='rm -i'
alias   cls=clear
alias    ..='cd ..'
alias   lcd='ls -laFd * .*'
alias   ldir='ls -la | grep "^d"'
alias   lt='ls -latF | less -E'
alias   lut='ls -lautF | less -E'
alias   rgrep='greprecurse'
alias   grepr='greprecurse'
alias   top='top -o cpu'
alias   ac='abc'
alias   m='less '
alias   ll='ls -laF '

alias   gs='git status'
alias   ga='git add -A'
alias   gco='git commit -am '
alias   gp='git push origin master'
alias   gpp='git push production master'
alias   gppm='git push production +master:refs/heads/master'


alias   bb='open -a bbedit '
alias   ox='open -a /Applications/Oxygen/Oxygen\ XML\ Editor.app/ '
alias   p='pico '



#   "r cc" reruns the last command beginning with cc
alias   r='fc -s'


# Prompt
PS1="\t=\W> "




# functions


function c
{
  if [ $# != 0 ]
  then cc $1.c -lm -lmx -Wunused -o $1
  fi
}

function cmath
{
  if [ $# != 0 ]
  then cc $1.c -lm -lmx -Wunused -L/Users/hodges/Science/lib -lmatpac -o $1
  fi
}


function cdb
{
  if [ $# != 0 ]
  then cc $1.c -lm -lmx -W -g -o $1
  fi
}


function gc
{
  grep $* *.c
}

function h
{
limit=${1-20}
fc -lr -100 | awk '
  {
    ss = substr($0,index($0,$2))
    if (mx[ss] == "") {
      mx[ss]      = "*"
      mn[++cnt]   = $1
      ms[cnt]     = ss
      if (cnt == '$limit') exit
    }
  }
  END {
    for (i=1; i<=cnt; i++)
      printf("%6d\t%s\n", mn[i],ms[i])
  }' | less -E
}

function lu
{
      last | awk '{ if (m[$1] != "") next; print $0; m[$1]++; }'
}



function greprecurse
{
  grep -d recurse $* .
}



# nonrepetative history
function h
{
N=20
if [ $# -ne 0 ] ; then N="$1"; fi
fc -lr -199 | awk -v N=$N 'BEGIN { if (N < 0) N = -N; } {
  c1 = $0; n1 = split(c1,s1);
  same = 0;
  for (ix = 1; ix <= ic; ix++) {
    c2 = cmd[ix]; n2 = split(c2,s2);
    if (n1 == n2) {
      for (ii = 2; ii <= n1 && s1[ii] == s2[ii]; ii++);
      if (ii > n1) same = 1;
    }
  }
  if (same == 0) { ic++; cmd[ic] = c1; printf("%s\n",c1); }
  if (ic >= N) exit;
}'
}
if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi
