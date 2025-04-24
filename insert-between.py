import sys
import argparse

parser = argparse.ArgumentParser(description='Insert text between comments')
parser.add_argument('-f', '--file', type=str, help='File path', required=True)
parser.add_argument('-c', '--content', type=str, help='Content to insert', required=True)
parser.add_argument('--newline', action='store_true', help='Whether or not to insert new lines above and below content, false by default', default=False)
parser.add_argument('-n', '--name', type=str, help='Comment name', required=True)
parser.add_argument('--head', type=str, help='Comment head, "<!-- " by default', default="<!-- ")
parser.add_argument('--tail', type=str, help='Comment tail, " -->" by default', default=" -->")

args = parser.parse_args()

file = args.file
to_insert = args.content
new_line = args.newline
comment_name = args.name
comment_head = args.head
comment_tail = args.tail
comment_start = f'{comment_head}{comment_name}:START{comment_tail}'
comment_end = f'{comment_head}{comment_name}:END{comment_tail}'

with open(file, 'r') as f:
  content = f.read()

start_index = content.find(comment_start)
end_index = content.find(comment_end, start_index)
if start_index == -1 or end_index == -1:
  print(f"No comment with name \"{comment_name}\" found")
  sys.exit()

maybe_new_line = "\n" if new_line else ""

content_next = content[:start_index + len(comment_start)] + maybe_new_line + to_insert + maybe_new_line + content[end_index:]

with open(file, 'w') as f:
  f.write(content_next)