@echo off
watchmedo auto-restart --patterns="*.py" --recursive -- python %1
