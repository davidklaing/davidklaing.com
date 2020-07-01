tippy('#laptop-setup', {
    theme: 'light-border',
    arrow: false,
    allowHTML: true,
    placement: 'right',
    touch: false,
    maxWidth: 550,
    interactive: true,
    interactiveBorder: 1,
    content: '<div class="article-component"><h1>My laptop setup</h1><hr/><em>Last updated 2018-12-16</em><hr/><p>After setting myself up on four laptops in the space of two years, I figured it was time to write this all down. <a href="https://github.com/mgelbart/misc/blob/master/laptop_setup.md">Mike Gelbart’s setup</a> has been useful to me, so maybe mine will be useful to you.</p><h2 id="macos-preferences">macOS preferences</h2><ol><li>Enable tap to click.    <ul><li><code class="language-plaintext highlighter-rouge">System Preferences</code> → <code class="language-plaintext highlighter-rouge">Trackpad</code></li><li>Check <code class="language-plaintext highlighter-rouge">Tap to click</code></li></ul></li><li>Set mouse speed to maximum.    <ul><li><code class="language-plaintext highlighter-rouge">System Preferences</code> → <code class="language-plaintext highlighter-rouge">Trackpad</code></li><li>Set <code class="language-plaintext highlighter-rouge">Tracking Speed</code> to <code class="language-plaintext highlighter-rouge">Fast</code></li></ul></li><li>Enable 3-finger drag.    <ul><li><code class="language-plaintext highlighter-rouge">System Preferences</code> → <code class="language-plaintext highlighter-rouge">Trackpad</code> → <code class="language-plaintext highlighter-rouge">Accessibility</code>→ <code class="language-plaintext highlighter-rouge">Mouse &amp; Trackpad</code> → <code class="language-plaintext highlighter-rouge">Trackpad Options</code></li><li>Check <code class="language-plaintext highlighter-rouge">Enable dragging</code> with <code class="language-plaintext highlighter-rouge">three finger drag</code></li></ul></li><li>Configure hot corners.    <ul><li><code class="language-plaintext highlighter-rouge">System Preferences</code> → <code class="language-plaintext highlighter-rouge">Trackpad</code> → <code class="language-plaintext highlighter-rouge">Hot Corners</code></li><li>Top left: <code class="language-plaintext highlighter-rouge">Desktop</code></li><li>Top right: <code class="language-plaintext highlighter-rouge">Mission Control</code></li><li>Bottom left: <code class="language-plaintext highlighter-rouge">Put Display to Sleep</code></li><li>Bottom right: <code class="language-plaintext highlighter-rouge">Launchpad</code></li></ul></li><li>Turn on Night Shift.    <ul><li><code class="language-plaintext highlighter-rouge">System Preferences</code> → <code class="language-plaintext highlighter-rouge">Displays</code> → <code class="language-plaintext highlighter-rouge">Night Shift</code></li><li>Set schedule to <code class="language-plaintext highlighter-rouge">Sunset to Sunrise</code></li></ul></li></ol><h2 id="installations">Installations</h2><ol><li>developer tools: <code class="language-plaintext highlighter-rouge">xcode-select --install</code></li><li><a href="https://1password.com/">1Password</a></li><li><a href="https://www.google.ca/chrome/?brand=CHBD&amp;gclid=Cj0KCQiAgMPgBRDDARIsAOh3uyLH9FyD5U6BuJ2Co_vlFaAEiDZYtHyFz2Wf-ESUYLTFpSxdpRLTXgQaAvyDEALw_wcB&amp;gclsrc=aw.ds">Chrome</a></li><li><a href="https://www.dropbox.com/">Dropbox</a></li><li><a href="https://qsapp.com/">Quicksilver</a></li><li><a href="https://www.iterm2.com/">iTerm2</a></li><li><a href="https://brew.sh/">Homebrew</a></li><li><a href="https://cran.rstudio.com/bin/macosx/">R</a></li><li><a href="https://www.rstudio.com/products/rstudio/download/">RStudio</a></li><li><a href="https://www.anaconda.com/download/#macos">Anaconda</a></li><li><a href="https://typora.io/">Typora</a></li><li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li><li><a href="https://www.spotify.com/ca-en/download/other/">Spotify</a></li></ol><h2 id="iterm2-configurations">iTerm2 configurations</h2><ol><li>Set the default typing style  to Natural:    <ul><li><code class="language-plaintext highlighter-rouge">Preferences</code> → <code class="language-plaintext highlighter-rouge">Profiles</code> → <code class="language-plaintext highlighter-rouge">Keys</code></li><li>Set <code class="language-plaintext highlighter-rouge">Load preset</code> to <code class="language-plaintext highlighter-rouge">Natural Text Editing</code></li></ul></li><li>Set new windows/tabs to open from previous session’s directory:    <ul><li><code class="language-plaintext highlighter-rouge">Preferences</code> → <code class="language-plaintext highlighter-rouge">Profiles</code> → <code class="language-plaintext highlighter-rouge">General</code></li><li>Under <code class="language-plaintext highlighter-rouge">Working Directory</code>, check <code class="language-plaintext highlighter-rouge">Reuse previous session’s directory</code></li></ul></li></ol><h2 id="bash-aliases">Bash aliases</h2><p>Put the following in <code class="language-plaintext highlighter-rouge">.bash_profile</code>:</p><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nb">alias </span><span class="nv">tp</span><span class="o">=</span><span class="s2">"open -a typora"</span><span class="nb">alias </span><span class="nv">rst</span><span class="o">=</span><span class="s2">"open -a rstudio"</span><span class="nb">alias </span><span class="nv">vs</span><span class="o">=</span><span class="s2">"open -a visual</span><span class="se">\ </span><span class="s2">studio</span><span class="se">\ </span><span class="s2">code"</span><span class="nb">alias </span><span class="nv">prev</span><span class="o">=</span><span class="s2">"open -a preview"</span></code></pre></div></div><h2 id="ssh">SSH</h2><p><a href="https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/">Instructions</a></p><p><code class="language-plaintext highlighter-rouge">ssh-add -K ~/.ssh/id_rsa</code> to store passphrase in Keychain.</p><p>Then add the following to <code class="language-plaintext highlighter-rouge">~/.ssh/config</code>:</p><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Host <span class="k">*</span>  UseKeychain <span class="nb">yes  </span>AddKeysToAgent <span class="nb">yes  </span>IdentityFile ~/.ssh/id_rsa</code></pre></div></div><h2 id="git">Git</h2><h3 id="configure-my-user">Configure my user.</h3><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git config <span class="nt">--global</span> user.name <span class="s2">"David Laing"</span>git config <span class="nt">--global</span> user.email davidkendalllaing@gmail.com</code></pre></div></div><h3 id="create-a-global-gitignore-file">Create a global gitignore file.</h3><p><code class="language-plaintext highlighter-rouge">touch ~/.gitignore_global</code></p><p>Put this in it:</p><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>.DS_Store.ipynb_checkpoints.Trashes.RHistory.RData__pycache__</code></pre></div></div><h3 id="set-up-git-aliases">Set up git aliases.</h3><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git config <span class="nt">--global</span> alias.co checkoutgit config <span class="nt">--global</span> alias.br branchgit config <span class="nt">--global</span> alias.ci commitgit config <span class="nt">--global</span> alias.st status</code></pre></div></div><h3 id="set-up-tab-completion-for-git-branches">Set up tab completion for git branches.</h3><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash <span class="nt">-o</span> ~/.git-completion.bash</code></pre></div></div><p>Add this to <code class="language-plaintext highlighter-rouge">.bash_profile</code>:</p><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">if</span> <span class="o">[</span> <span class="nt">-f</span> ~/.git-completion.bash <span class="o">]</span><span class="p">;</span> <span class="k">then</span>  <span class="nb">.</span> ~/.git-completion.bash<span class="k">fi</span></code></pre></div></div><p>Run <code class="language-plaintext highlighter-rouge">chmod -X ~/.git-completion.bash</code>, and restart iTerm2.</p><h2 id="rstudio-configurations">RStudio configurations</h2><h3 id="change-the-default-rstudio-pane-layout">Change the default RStudio pane layout.</h3><ul><li><code class="language-plaintext highlighter-rouge">Preferences</code> → <code class="language-plaintext highlighter-rouge">Pane Layout</code></li><li>Top left: <code class="language-plaintext highlighter-rouge">Source</code></li><li>Top right: <code class="language-plaintext highlighter-rouge">Console</code></li><li>Bottom left: <code class="language-plaintext highlighter-rouge">History</code></li><li>Bottom right: everything else</li></ul><h3 id="add-a-margin-line">Add a margin line.</h3><ul><li><code class="language-plaintext highlighter-rouge">Preferences</code> → <code class="language-plaintext highlighter-rouge">Code</code> → <code class="language-plaintext highlighter-rouge">Display</code></li><li>Check <code class="language-plaintext highlighter-rouge">Show margin</code></li></ul><h3 id="remove-the-default-to-save-rdata">Remove the default to save <code class="language-plaintext highlighter-rouge">.RData</code>.</h3><ul><li><code class="language-plaintext highlighter-rouge">Preferences</code> → <code class="language-plaintext highlighter-rouge">General</code></li><li>Uncheck <code class="language-plaintext highlighter-rouge">Restore .RData into workspace at startup</code></li><li>Change <code class="language-plaintext highlighter-rouge">Save workspace to .RData on exit</code> to <code class="language-plaintext highlighter-rouge">Never</code></li></ul><h3 id="set-up-keyboard-shortcuts">Set up keyboard shortcuts.</h3><ul><li><code class="language-plaintext highlighter-rouge">Preferences</code> → <code class="language-plaintext highlighter-rouge">Code</code> → <code class="language-plaintext highlighter-rouge">Editing</code> → <code class="language-plaintext highlighter-rouge">Modify Keyboard Shortcuts</code></li><li>Open Previous Tab: <code class="language-plaintext highlighter-rouge">Alt+Cmd+Left</code></li><li>Open Next Tab: <code class="language-plaintext highlighter-rouge">Alt+Cmd+Right</code></li><li>Move focus to source: <code class="language-plaintext highlighter-rouge">Cmd+1</code></li><li>Move focus to console: <code class="language-plaintext highlighter-rouge">Cmd+2</code></li><li>Move focus to terminal: <code class="language-plaintext highlighter-rouge">Cmd+3</code></li></ul><h3 id="create-custom-snippets">Create custom snippets.</h3><ul><li><code class="language-plaintext highlighter-rouge">Preferences</code> → <code class="language-plaintext highlighter-rouge">Code</code> → <code class="language-plaintext highlighter-rouge">Edit Snippets</code></li><li>Add these:</li></ul><div class="language-R highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">snippet</span><span class="w"> </span><span class="n">pview</span><span class="w">	</span><span class="p">{</span><span class="n">View</span><span class="p">(</span><span class="n">.</span><span class="p">);</span><span class="w"> </span><span class="n">.</span><span class="p">}</span><span class="w"></span><span class="n">snippet</span><span class="w"> </span><span class="n">pprint</span><span class="w">	</span><span class="p">{</span><span class="n">print</span><span class="p">(</span><span class="n">.</span><span class="p">);</span><span class="w"> </span><span class="n">.</span><span class="p">}</span><span class="w"></span></code></pre></div></div><h2 id="jekyll">Jekyll</h2><h3 id="install-rbenv"><a href="https://jekyllrb.com/docs/installation/macos/">Install rbenv</a></h3><p>(So you don’t have to alter the version of Ruby that comes with Mac.)</p><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c"># Install rbenv and ruby-build</span>brew <span class="nb">install </span>rbenv<span class="c"># Setup rbenv integration to your shell</span>rbenv init<span class="c"># Check your install</span>curl <span class="nt">-fsSL</span> https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash<span class="c"># Install a new version of Ruby</span>rbenv <span class="nb">install </span>2.5.3rbenv global 2.5.3ruby <span class="nt">-v</span></code></pre></div></div><h3 id="install-jekyll">Install Jekyll</h3><p><a href="http://kbroman.org/simple_site/pages/local_test.html">This post was useful</a>, as was <a href="https://github.com/bundler/bundler/issues/1767#issuecomment-4787059">this issue comment</a>.</p><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>gem <span class="nb">install </span>bundlerbundle <span class="nb">install</span></code></pre></div></div><p>To build a site:</p><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>bundle <span class="nb">exec </span>jekyll build</code></pre></div></div><p>To test it locally:</p><div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>bundle <span class="nb">exec </span>jekyll serve</code></pre></div></div></div>'
});