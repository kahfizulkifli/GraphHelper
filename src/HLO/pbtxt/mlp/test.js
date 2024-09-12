const text = `
HloModule SyncTensorsGraph.405, input_output_alias={ {0}: (3, {}, must-alias), {1}: (2, {}, must-alias), {2}: (5, {}, must-alias), {3}: (6, {}, must-alias), {4}: (7, {}, must-alias), {5}: (8, {}, must-alias), {6}: (15, {}, must-alias), {7}: (14, {}, must-alias), {8}: (13, {}, must-alias), {9}: (12, {}, must-alias), {10}: (11, {}, must-alias), {11}: (10, {}, must-alias) }

ENTRY %SyncTensorsGraph.405 (p0.1: f32[], p1.6: f32[], p2.12: f32[120], p3.20: f32[120,784], p4.29: f32[16,1,28,28], p5.40: f32[84,120], p6.50: f32[84], p7.68: f32[10,84], p8.78: f32[10], p9.111: s64[16], p10.185: f32[120,784], p11.209: f32[120], p12.227: f32[84,120], p13.251: f32[84], p14.269: f32[10,84], p15.293: f32[10]) -> (f32[120,784], f32[120], f32[84,120], f32[84], f32[10,84], /*index=5*/f32[10], f32[10], f32[10,84], f32[84], f32[84,120], /*index=10*/f32[120], f32[120,784], f32[16,784], f32[16,10], f32[]) {
  %get-tuple-element.328 = f32[120,784]{1,0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.307), index=5, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
}


`

export default text;