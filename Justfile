_default:
  just -l

test-build:
  @echo 'Generating dist...'
  @bun run generate

push message: test-build
  @echo 'Adding files...'
  @git add .
  @echo 'Committing...'
  @git commit -m "{{ message }}"
  @echo 'Pushing...'
  @git push