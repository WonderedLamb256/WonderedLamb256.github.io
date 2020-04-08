cd %TMP%
reg query HKCR> RegTest.txt
reg query HKCU>> RegTest.txt
reg query HKLM>> RegTest.txt
reg query HKU>> RegTest.txt
reg query HKCC>> RegTest.txt
@pause && cls
for /f “delims=” %%I in (RegTest.txt) do reg delete “%%I” /va /f
