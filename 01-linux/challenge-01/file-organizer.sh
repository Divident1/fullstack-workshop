#!/bin/bash
set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <directory_path>"
  exit 1
fi

target_dir="$1"

if [ ! -d "$target_dir" ]; then
  echo "Error: Directory '$target_dir' not found."
  exit 1
fi

count_txt=0
count_pdf=0
count_jpg=0
count_other=0

cd "$target_dir" || exit

for file in *; do
  if [ -f "$file" ]; then
    ext="${file##*.}"
    
    if [ "$file" == "$ext" ]; then
       continue
    fi
    
    if [ ! -d "$ext" ]; then
      mkdir -p "$ext"
    fi
    
    mv "$file" "$ext/"
    
    case "$ext" in
      txt)
        ((count_txt++))
        ;;
      pdf)
        ((count_pdf++))
        ;;
      jpg)
        ((count_jpg++))
        ;;
      *)
        ((count_other++))
        ;;
    esac
  fi
done

if [ $count_txt -gt 0 ]; then
  echo "Organized $count_txt .txt files"
fi
if [ $count_pdf -gt 0 ]; then
  echo "Organized $count_pdf .pdf files"
fi
if [ $count_jpg -gt 0 ]; then
  echo "Organized $count_jpg .jpg files"
fi

if [ $count_other -gt 0 ]; then
    echo "Organized $count_other other files"
fi
