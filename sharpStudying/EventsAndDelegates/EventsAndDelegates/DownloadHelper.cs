using System;
using System.Threading;

namespace EventsAndDelegates
{
    public class DownloadHelper
    {
        public delegate void FiledownloadedEventHandler(object source, EventArgs args);


        public void Download(File file)
        {
            Console.WriteLine("Downloading file...");
            Thread.Sleep(4000);
        }
    }
}