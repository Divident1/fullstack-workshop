#!/bin/bash
name="John"
age=25
path="/home/user"

# Using variables
echo "Name: $name"
echo "Age: $age"
echo "Path: ${path}/documents"  # Braces for clarity

# Read-only variables
readonly PI=3.14159