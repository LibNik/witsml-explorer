using System.Collections.Generic;
using System.Linq;

using Witsml.Data;

using WitsmlExplorer.Api.Jobs.Common;
using WitsmlExplorer.Api.Models;

namespace WitsmlExplorer.Api.Query
{
    public static class ObjectQueries
    {
        public static IEnumerable<WitsmlObjectOnWellbore> DeleteObjectsQuery(ObjectReferences toDelete)
        {
            return toDelete.ObjectUids.Select((uid) =>
            {
                WitsmlObjectOnWellbore o = EntityTypeHelper.EntityTypeToObjectOnWellbore(toDelete.ObjectType);
                o.Uid = uid;
                o.UidWellbore = toDelete.WellboreUid;
                o.UidWell = toDelete.WellUid;
                return o;
            }
            );
        }

        public static IEnumerable<T> CopyObjectsQuery<T>(IEnumerable<T> objects, WitsmlWellbore targetWellbore) where T : WitsmlObjectOnWellbore
        {
            return objects.Select((o) =>
            {
                o.UidWell = targetWellbore.UidWell;
                o.NameWell = targetWellbore.NameWell;
                o.UidWellbore = targetWellbore.Uid;
                o.NameWellbore = targetWellbore.Name;
                return o;
            });
        }
    }
}
