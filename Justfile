_default:
  just -l

test-build:
  @echo 'Generating dist...'
  @bun run generate

push message: test-build
  @echo 'Adding files...'
  @git add .
  @echo 'Committing...'
  @GPG_TTY=$(tty) git commit -s -S -m "{{ message }}"
  @echo 'Pushing...'
  @git push