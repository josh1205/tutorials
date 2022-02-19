using System;

namespace EventsAndDelegates
{
    class Program
    {
        static void Main(string[] args)
        {
            var file = new File() { Title = "File 1" };
            var downloadHelper = new DownloadHelper();
            downloadHelper.Download(file);
        }
    }
}
